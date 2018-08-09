const Module = require('vialer-js/lib/module')

/**
* Main entrypoint for Queues.
* @memberof AppForeground.plugins
*/
class ModuleQueues extends Module {
    constructor(app) {
        super(app)

        this.app.components.Queues = require('../../components/queues')
        this.menubarIcon = 'queues'
        this.menubarTransferHint = true
    }
}

module.exports = ModuleQueues
