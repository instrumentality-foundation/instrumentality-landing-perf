<template>
    <div id="blockchain-section-comp">
        <section class="uk-section uk-flex uk-flex-column uk-text-center">
            <div id="block1" class="uk-flex uk-flex-column uk-flex-center uk-flex-middle">
                <img src="@/assets/Illustrations/keys.svg" alt="Iroha node providing keys">
                <h3>1. Private Keys: Freedom and responsability</h3>
                <p>
                    When you register on the blockchain, Instrumentality generates a pair of keys and sends it to you.
                    Keep your keys safe as they will be needed for authentication. Having the private keys means that you
                    are solely responsible for your account.
                </p>
            </div>
            <div id="block2" class="uk-flex uk-flex-column uk-flex-center uk-flex-middle">
                <img src="@/assets/Illustrations/blockchain.svg" alt="Iroha node providing keys">
                <h3>2. Fast and Secure Consensus</h3>
                <p>
                    Consensus is a mechanism used to make sure that different nodes see exactly the same thing when looking at the
                    distributed ledger. Due to <span>Iroha's</span> YAC algorithm, transactions are fast and malicious nodes can't
                    modify the ledger.
                </p>
            </div>
            <div id="block3" class="uk-flex uk-flex-column uk-flex-center uk-flex-middle">
                <img src="@/assets/Illustrations/profile.svg" alt="Iroha node providing keys">
                <h3>3. Trustworthy profile</h3>
                <p>
                    It's always been hard for people to prove their programming skills and for employers to trust a simple piece of paper.
                    A blockchain solution benefits the developer by recording, in an immutable manner, his skill development and helps employers
                    by offering them data from trustworthy sources, data which can't be manipulated.
                </p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'BlockchainSection'    
}
</script>

<style lang="less" scoped>

#block1, #block2, #block3 {
    color: @dark-color;
    font-family: 'Roboto', sans-serif;
    padding: 1em;
    
    img {
        max-height: 35vh;
    }

    h3 {
        .font-fluid(1.5, 30, 320, 3840)
    }

    p {
        .font-fluid (1, 20, 320, 3840)
    }
}

</style>