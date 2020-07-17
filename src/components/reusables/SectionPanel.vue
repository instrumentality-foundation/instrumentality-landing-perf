<!-- Like a Feature Panel without a button -->
<template>
    <div class="section-panel-comp">
        <section class="uk-section uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-text-center uk-card uk-card-default">
            <img :src="panelImage" :alt="panelImageDescription">
            <h2>{{ panelTitle }}</h2>
            <p>{{ panelIntro }}</p>
        </section>
    </div>
</template>

<script>
export default {
    name: 'SectionPanel',
    props: {
        panelImage: String,
        panelImageDescription: String,
        panelTitle: String,
        panelIntro: String
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

    p {
        color: @dark-color;
        font-family: 'Roboto', sans-serif;
        .font-fluid(1, 75, 320, 3840)
    }

</style>