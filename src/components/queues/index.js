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
            openPlatformUrl: function(path = '') {
                app.emit('bg:user:update-token', {
                    callback: ({token}) => {
                        path = `client/${this.user.client_id}/${path}`
                        path = `user/autologin/?token=${token}&username=${this.user.username}&next=/${path}`
                        let url = `${app.state.settings.platform.url}/${path}`
                        if (app.env.isExtension) browser.tabs.create({url: url})
                        window.open(url, '_blank')
                    },
                })
            },
            toggleActiveQueue: function(queue) {
                if (app.state.queues.selected.id !== queue.id) {
                    app.emit('bg:queues:selected', {queue: queue})
                } else {
                    app.emit('bg:queues:selected', {queue: null})
                }
            },
        }, app.helpers.sharedMethods()),
        render: templates.vjs_mod_queues_vg_queues.r,
        staticRenderFns: templates.vjs_mod_queues_vg_queues.s,
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
