const Plugin = require('vialer-js/lib/plugin')

/**
* Main entrypoint for Queues.
* @memberof AppForeground.plugins
*/
class PluginQueues extends Plugin {
    constructor(app) {
        super(app)

        this.app.components.Queues = require('../../components/queues')
        this.menubarIcon = 'queues'
        this.menubarTransferHint = true
    }
}

module.exports = PluginQueues
