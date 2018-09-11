module.exports = function(app) {
    let _helpers = {}

    _helpers.openPlatformUrl = function(path = '') {
        app.emit('bg:user:update-token', {
            callback: ({token}) => {
                path = `client/${this.user.client_id}/${path}`
                path = `user/autologin/?token=${token}&username=${this.user.username}&next=/${path}`
                let url = `${app.state.settings.platform.url}/${path}`
                if (app.env.isExtension) browser.tabs.create({url})
                window.open(url, '_blank')
            },
        })
    }
    // Make this method available to components.
    Object.assign(app.helpers.sharedMethodsMixin, _helpers)
}
