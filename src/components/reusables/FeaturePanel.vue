<template>
    <div class="feature-panel-comp">
        <section class="uk-section uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-text-center">
            <img :src="panelImage" :alt="panelImageDescription">
            <h2>{{ panelTitle }}</h2>
            <button class="uk-button" type="button"><router-link :to="panelLink">{{ panelButton }}</router-link></button>
            <slot name="feature-content"></slot>
        </section>
    </div>
</template>

<script>
export default {
    name: 'FeaturePanel',
    props: {
        panelImage: String,
        panelImageDescription: String,
        panelTitle: String,
        panelButton: String,
        panelLink: String
    }
}
</script>

<style lang="less" scoped>

    img {
        max-height: 80vh;
    }

    h2 {
        color: @dark-color;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        .font-fluid(1.5, 150, 320, 3840);
    }

    button {
        padding-top: .5em;
        padding-bottom: .5em;
        color: @light-color;
        background-color: #C0004F;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        .font-fluid(1, 50, 320, 3840);
    }

    a {
        text-decoration: none;
        color: @light-color;
    }

</style>