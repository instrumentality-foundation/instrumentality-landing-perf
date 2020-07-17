<template>
    <div id="free-software-comp">
        <section class="uk-section uk-flex uk-felx-row uk-flex-around uk-text-center">
            <div class="uk-flex uk-flex-column uk-flex-middle uk-flex-center">
                <img src="@/assets/Illustrations/free-planet.svg" alt="Another planet">
                <h3>Software that respects you</h3>
                <p>
                    Instrumentality is not just open-source, it is free(as in freedom) software that respects
                    your privacy and your rights as a user. Come joins us in creating awesome free software
                    products.
                </p>
                <a href="">Contribute to our projects</a>
            </div>

            <div class="uk-flex uk-flex-column uk-flex-middle uk-flex-center">
                <img src="@/assets/Illustrations/shield.svg" alt="Another planet">
                <h3>Security in the open</h3>
                <p>
                    As we've seen with multiple big products, security in the darkness does not work for anyone.
                    That's we all of our code is out in the open. The strength of our security lays in the code
                    not in your inability to see the it.
                </p>
                <a href="">Take a peek</a>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'FreeSoftwareSection'    
}
</script>

<style lang="less" scoped>

.uk-section {
    padding: .5em;

    img {
        max-height: 35vh;
    }

    h3, p {
        color: @dark-color;
        font-family: 'Roboto', sans-serif;
    }

    h3 {
        .font-fluid(1.5, 30, 320, 3840);
    }

    p {
        .font-fluid (1, 20, 320, 3840);
    }

    a {
        color: @light-color;
        font-family: 'Roboto', sans-serif;
        padding: .5em;
        font-weight: 700;
        .font-fluid(1,20,320,3840);
        background-color: #C0004F;
    }

}

@media only screen and(max-width: 960px) {
    .uk-section {
        flex-direction: column;
        
        div {
            margin-top: 5em;
        }

    }
}

</style>