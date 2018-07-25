module.exports = (app) => {
    /**
    * @memberof fg.components
    */
    const Queues = {
        computed: app.helpers.sharedComputed(),
        methods: Object.assign({
            classesQueue: function(queue) {
                let classes = {}
                if (queue.queue_size <= 3) classes.quiet = true
                else if (queue.queue_size <= 6) classes.moderate = true
                else if (queue.queue_size <= 10) classes.busy = true
                else if (queue.queue_size > 10) classes.hectic = true
                return classes
            },
            toggleActiveQueue: function(queue) {
                if (app.state.queues.selected.id !== queue.id) {
                    app.emit('bg:queues:selected', {queue: queue})
                } else {
                    app.emit('bg:queues:selected', {queue: null})
                }
            },
        }, app.helpers.sharedMethods()),
        render: templates.vialer_js_module_queues_queues.r,
        staticRenderFns: templates.vialer_js_module_queues_queues.s,
        store: {
            calls: 'calls.calls',
            queues: 'queues.queues',
            selected: 'queues.selected',
            status: 'queues.status',
            user: 'user',
        },
    }

    return Queues
}
