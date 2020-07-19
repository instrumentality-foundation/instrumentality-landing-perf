<template>
    <div id="navbar-comp">
        <!-- Sticky wrapping container -->
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">

            <!-- Navbar definition -->
            <nav class="uk-navbar-container" uk-navbar>

                <!-- Left side of navbar -->
                <div class="uk-navbar-left">
                    <router-link to="/" class="uk-navbar-item uk-logo">
                        <img src="@/assets/Instrumentality-Logo.svg" alt="The Instrumentality Logo" width="42px" height="42px">
                        <span class="uk-margin-small-left">Instrumentality</span>
                    </router-link>
                </div>

                <!-- Center of the navbar: visible on larger devices only -->
                <div class="uk-navbar-center uk-visible@m">
                    <ul class="uk-navbar-nav">
                        <li><router-link to="/about" active-class="active">About the project</router-link></li>
                        <li><a href="">For developers</a></li>
                    </ul>
                </div>

                <!-- Right side of navbar: on larger devices -->
                <div class="uk-navbar-right uk-visible@m">
                    <ul class="uk-navbar-nav">
                        <li><a href="#login-modal" uk-toggle>Login</a></li>
                        <li><a href="#signup-modal" uk-toggle>Signup</a></li>
                    </ul>
                </div>

                <!-- Right side of navbar: on mobile devices -->
                <div class="uk-navbar-right uk-hidden@m">
                    <button class="uk-button uk-navbar-item" type="button" uk-toggle="target: #mobile-nav">
                        <font-awesome-icon :icon="['fas', 'bars']" size="lg"></font-awesome-icon>
                    </button>
                </div>
            </nav>
        </div>

        <!-- Offcanvas navbar for mobile -->
        <div id="mobile-nav" uk-offcanvas="flip: true">
            <div class="uk-offcanvas-bar uk-flex uk-flex-column">
                <button class="uk-offcanvas-close" type="button" uk-close></button>

                <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                    <li><router-link to="/about" active-class="active">About the project</router-link></li>
                    <li><a href="">For developers</a></li>

                    <hr class="uk-divider" />

                    <li><a href="#login-modal" uk-toggle>Login</a></li>
                    <li><a href="#signup-modal" uk-toggle>Signup</a></li>
                </ul>
            </div>
        </div>

        <!-- Defining the authentication modals -->
        <div id="login-modal" uk-modal>
            <div class="uk-modal-dialog">
                <button class="uk-modal-close-default" type="button" uk-close></button>
                
                <!-- Modal header -->
                <div class="uk-modal-header">
                    <h3 class="uk-modal-title uk-text-center">Welcome back!</h3>
                </div>

                <!-- Modal body -->
                <div class="uk-modal-body uk-flex uk-flex-column uk-flex-center">
                    <img src="@/assets/Illustrations/vault.svg" alt="A safebox" class="uk-margin-medium-bottom">
                    <form action="" class="uk-flex uk-flex-center">
                        <input id="login-private-key-inp" type="password" class="uk-input uk-text-center" placeholder="Enter Your Private Key">
                    </form>
                </div>

                <!-- Modal footer -->
                <div class="uk-modal-footer uk-flex uk-flex-center uk-flex-column uk-flex-middle">
                    <button id="login-button" class="uk-button uk-text-center uk-margin-bottom">Log In</button>
                    <a href="#signup-modal" uk-toggle>I don't have an ID yet</a>
                </div>

            </div>
        </div>

        <div id="signup-modal" uk-modal>
            <div class="uk-modal-dialog">
                <button class="uk-modal-close-default" type="button" uk-close></button>
                
                <!-- Modal header -->
                <div class="uk-modal-header">
                    <h3 class="uk-modal-title uk-text-center">Get your developer identity</h3>
                </div>

                <!-- Modal body -->
                <div class="uk-modal-body uk-flex uk-flex-column uk-flex-center">
                    <img src="@/assets/Illustrations/id.svg" alt="An ID card" class="uk-margin-medium-bottom">
                    <form action="" class="uk-flex uk-flex-center">
                        <input id="signup-user-inp" type="text" class="uk-input uk-text-center" placeholder="Choose a clever username">
                    </form>
                </div>

                <!-- Modal footer -->
                <div class="uk-modal-footer uk-flex uk-flex-center uk-flex-column uk-flex-middle">
                    <button id="signup-button" class="uk-button uk-text-center uk-margin-bottom">Sign Up</button>
                    <div id="signup-spinner" uk-spinner="ratio: 2"></div>
                    <a href="#login-modal" uk-toggle>I already have an ID</a>
                </div>

            </div>
        </div>
        

    </div>
</template>

<script>
import { AccountManager } from '@/utils/AccountManager';
import { SpinnerVisuals, ElementManipulator } from '@/utils/ElementManipulator';

var accountManager = new AccountManager;
var manipulator = new ElementManipulator;

export default {
    name: 'Navbar',
    mounted() {
        /** Adding two click listeners for the authentication buttons */
        document
            .getElementById('signup-button')
            .addEventListener("click", function() {
                let spinnerVisuals = new SpinnerVisuals('signup-button', 'signup-spinner')

                // Activate spinner and send request
                spinnerVisuals.toggle();

                accountManager.createAccount(
                    manipulator.getTextFromInput('signup-user-inp'),
                    spinnerVisuals
                )
            });
    }
}
</script>

<style lang="less" scoped>

button {
    background-color: transparent;
}

.uk-navbar-container {
    background-color: rgba(255, 255, 255, 0.75) !important;
    backdrop-filter: blur(1em) saturate(150%);
}

.uk-logo {
    color: @brand-color;
    font-family: 'Roboto', sans-serif;
    .font-fluid(1.5, 15, 320, 3840);
}

.uk-logo:hover {
    color: @brand-color;
}

.uk-navbar-nav li a {
    color: @dark-color;
    font-family: 'Roboto', sans-serif;
    .font-fluid(.8, 10, 320, 3840);
    position: relative;
}

.uk-navbar-nav li a:hover, .uk-offcanvas-bar .uk-nav li a:hover {
    color: @brand-color;
}

.uk-offcanvas-bar {
    background-color: white;
}

button.uk-offcanvas-close, button.uk-offcanvas-close:hover {
    color: @dark-color;
}

.uk-offcanvas-bar .uk-nav li a {
    color: @dark-color;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4em;
    position: relative;
}

.uk-offcanvas-bar hr{
    border: 1px solid;
    color: @brand-color-light-sister;
    border-top-color: @brand-color-light-sister;
}

/** Cool effect on link hovering */

.uk-navbar-nav li a::before, .uk-offcanvas-bar .uk-nav li a::before {
    position: absolute;
    content: "";
    background-color: @brand-color;
    width: 50%;
    height: 2px;
    left: 25%;
    bottom: 0;
    visibility: hidden;
    transform: scaleX(0);
    transition: all .25s cubic-bezier(1,.25,0,.75);
}

.uk-navbar-nav li a:hover::before, .uk-offcanvas-bar .uk-nav li a:hover::before {
    transform: scaleX(1);
    visibility: visible;
}

/** Freezing effect when link becomes active */
.uk-navbar-nav li a.active, .uk-offcanvas-bar .uk-nav li a.active {
  color: @brand-color;
}

.uk-navbar-nav li a.active::before, .uk-offcanvas-bar .uk-nav li a.active::before {
  content: "";
  position: absolute;
  visibility: visible;
  width: 50%;
  height: 2px;
  background-color: @brand-color;
  bottom: 0;
  left: 25%;
  transform: scaleX(1);
}

/** Fixing focused links */
.uk-navbar-nav li a.active:focus, .uk-offcanvas-bar .uk-nav li a.active:focus {
    color: @brand-color;
}

/** Styles for the authentication modals */
.uk-modal-body {
    padding-left: 0;
    padding-right: 0;

    input {
        width: 80%;
        font-family: 'Roboto', sans-serif;
        border-color: @brand-color;
        border-radius: .3em;
        color: @brand-color;
        .font-fluid(1, 20, 320, 3840);

    }

    input::placeholder {
        color: rgba(71, 20, 36, 0.8);
    }

    img {
        max-height: 25vh;
    }
}

.uk-modal-footer {
    padding: 1em;

    a {
        font-family: 'Roboto', sans-serif;
        .font-fluid(1, 15, 320, 3840);
        color: @link-color;
        text-decoration: none;
        padding: 1em;
        border-radius: .3em;
        transition: all 0.3s ease-in-out;
    }

    a:hover {
        background-color: @link-color;
        color: @light-color;
        transition: all 0.3s ease-in-out;
    }
}

.uk-modal-footer button.uk-button {
    width: 50%;
    padding: .5em;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    .font-fluid(1, 30, 320, 3840);
    color: @light-color;
    background-color: #62BAAC;
    border-radius: .3em;
}

#signup-modal .uk-modal-footer {
    button.uk-button {
        background-color: @brand-color-light-sister;
    }

    // The spinner
    .uk-icon {
        color: @brand-color-light-sister;
        display: none;
    }
}

/** Overflow wrap for keys modal */
h3.ovf-wrap {
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
}

</style>