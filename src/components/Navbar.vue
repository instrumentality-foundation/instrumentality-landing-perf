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
                        <li><a href="">Login</a></li>
                        <li><a href="">Signup</a></li>
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

                    <li><a href="">Login</a></li>
                    <li><a href="">Signup</a></li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Navbar'    
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
    color: @brand-color-light-siste;
    border-top-color: @brand-color-light-siste;
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
.uk-navbar-nav li a.active {
  color: @brand-color;
}

.uk-navbar-nav li a.active::before {
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

</style>