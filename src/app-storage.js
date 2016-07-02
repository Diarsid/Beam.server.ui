var appStorage = {

    JWTKey: "beam.server.ui.jwt",
    userRoleKey: "beam.server.ui.user.role",
    userIdKey: "beam.server.ui.user.id",
    userNickNameKey: "beam.server.ui.user.nick",

    hasAuthInfo: function () {
        return (localStorage.getItem(this.JWTKey) != null &&
                localStorage.getItem(this.userRoleKey) != null &&
                localStorage.getItem(this.userIdKey) != null &&
                localStorage.getItem(this.userNickNameKey) != null );

    }
};

module.exports = appStorage;