<template>
    <div id="modalLogin" class="modal">
        <div class="modal-content">
            <h2 class="center-align">Login</h2>
            <div class="center-align">
                <div class="divider"></div>
                <form class="col s12">
                    <div class="row center-align">
                        <div class="input-field col m10 offset-m1 blue-text">
                            <i class="mdi-action-account-circle prefix"></i>
                            <input id="icon_prefix" type="text" class="validate">
                            <label for="icon_prefix">Username</label>
                        </div>
                        <div class="input-field col m10 offset-m1 blue-text ">
                            <i class="mdi-action-lock-open prefix"></i>
                            <input id="icon_password" type="password" class="validate">
                            <label for="icon_password">Password</label>
                        </div>
                        <div class="input-field col m10 offset-m1 blue-text">
                            <input type="checkbox" class="blue-text" id="filled-in-box" checked="checked">
                            <label for="filled-in-box">Remember me next time</label>
                        </div>
                    </div>
                </form>
                <div class="divider"></div>
                <p>
                    <a href="#" class="btn btn-flat white modal-close">Cancel</a> &nbsp;
                    <a href="#" class="waves-effect waves-blue blue btn btn-flat modal-action modal-close">Login</a>
                </p>
            </div>
        </div>
    </div>
</template>
