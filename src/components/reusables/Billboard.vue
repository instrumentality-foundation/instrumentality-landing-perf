<template>
    <div class="billboard-comp">
        <section class="uk-section uk-section-xlarge uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-text-center">
            <h1>{{ billboardTitle }}</h1>
            <h2>{{ billboardCatchphrase }}</h2>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Billboard',
    props: {
        billboardTitle: String,
        billboardCatchphrase: String
    }
}
</script>

<style lang="less" scoped>

    h1, h2 {
        color: @dark-color;
        font-family: 'Roboto', sans-serif;
    }

    h1 {
        font-weight: 900;
        .font-fluid(2.5, 300, 320, 3840);
        text-shadow: .02em .03em 0 rgb(164, 31, 118, 0.5);
    }

    h2 {
        font-weight: 700;
        .font-fluid(1.5, 150, 320, 3840);
    }
</style>