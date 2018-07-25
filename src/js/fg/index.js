const Module = require('vialer-js/src/js/fg/lib/module')

/**
* Main entrypoint for Queues.
* @memberof AppForeground.modules
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
