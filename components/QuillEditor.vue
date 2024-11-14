<template>
    <ClientOnly>
        <QuillEditor
            ref="quillEditor"
            v-model:content="content"
            :options="editorOptions"
            content-type="html"
        />
    </ClientOnly>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import interact from 'interactjs'
import { onMounted, ref } from 'vue'

// Toolbar options
const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],
    [{ header: 1 }, { header: 2 }],
    [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ direction: 'rtl' }],
    [{ size: ['small', false, 'large', 'huge'] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ['clean'],
]

// Editor options
const editorOptions = ref({
    modules: {
        toolbar: {
            container: toolbarOptions,
            handlers: {
                image: imageHandler,
            },
        },
    },
    placeholder: 'Compose an epic...',
    readOnly: false,
    theme: 'snow',
})

// Define content with default text
const content = ref(
    '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam.</p>'
)

const quillEditor = ref(null)

function imageHandler() {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()

    input.onchange = async () => {
        const file = input.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                const quill = quillEditor.value.getQuill()
                const range = quill.getSelection()
                if (range) {
                    quill.insertEmbed(range.index, 'image', e.target.result)
                    quill.setSelection(range.index + 1)
                    enableImageManipulation()
                }
            }
            reader.readAsDataURL(file)
        }
    }
}

// Function to enable image dragging and resizing
function enableImageManipulation() {
    interact('.ql-editor img')
        .resizable({
            edges: { left: true, right: true, bottom: true, top: true },
            preserveAspectRatio: true,
            inertia: true,
        })
        .draggable({
            onmove: dragMoveListener,
        })
        .on('resizemove', (event) => {
            const target = event.target
            const width = event.rect.width
            const height = event.rect.height

            target.style.width = width + 'px'
            target.style.height = height + 'px'
            target.style.transform = `translate(${event.deltaRect.left}px, ${event.deltaRect.top}px)`
        })
}

// Function to move the image
function dragMoveListener(event) {
    const target = event.target
    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // Translate the image position
    target.style.transform = `translate(${x}px, ${y}px)`

    // Store the new position
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
}

// Alignment handler
const alignmentHandler = (alignment) => {
    const quill = quillEditor.value.getQuill()
    const range = quill.getSelection()
    if (range) {
        const image = quill.getLeaf(range.index)[0].ops[0].insert.image // Get the image
        if (image) {
            quill.formatText(range.index, 1, { align: alignment }) // Apply alignment
        }
    }
}

// Setup custom alignment buttons
function setupAlignmentButtons() {
    const toolbar = document.querySelector('.ql-toolbar')
    if (toolbar) {
        const leftButton = document.createElement('button')
        leftButton.innerText = 'Align Left'
        leftButton.classList.add('ql-align-left')
        leftButton.onclick = () => alignmentHandler('left')

        const centerButton = document.createElement('button')
        centerButton.innerText = 'Align Center'
        centerButton.classList.add('ql-align-center')
        centerButton.onclick = () => alignmentHandler('center')

        const rightButton = document.createElement('button')
        rightButton.innerText = 'Align Right'
        rightButton.classList.add('ql-align-right')
        rightButton.onclick = () => alignmentHandler('right')

        toolbar.appendChild(leftButton)
        toolbar.appendChild(centerButton)
        toolbar.appendChild(rightButton)
    }
}

// Call setupAlignmentButtons after the component mounts
onMounted(() => {
    enableImageManipulation()
    setupAlignmentButtons()
})
</script>

<style>
.ql-container {
    min-height: 100px;
    height: 50%;
}

.ql-editor {
    min-height: 100px;
    height: 100%;
}

.ql-editor img {
    max-width: 100%; /* Responsive images */
    cursor: nwse-resize; /* Show resize cursor */
}
</style>
