<template>
    <div id="home-comp">
        <Billboard
            billboard-title="Instrumentality"
            billboard-catchphrase="The blockchain productivity platform">

        </Billboard>

        <FeaturePanel
            :panel-image="panel1.image"
            :panel-image-description="panel1.imageDescription"
            :panel-title="panel1.title"
            :panel-button="panel1.button">

        </FeaturePanel>

        <FeaturePanel
            :panel-image="panel2.image"
            :panel-image-description="panel2.imageDescription"
            :panel-title="panel2.title"
            :panel-button="panel2.button">

        </FeaturePanel>

        <FeaturePanel
            :panel-image="panel3.image"
            :panel-image-description="panel3.imageDescription"
            :panel-title="panel3.title"
            :panel-button="panel3.button">

        </FeaturePanel>

    </div>
</template>

<script>
import Billboard from "@/components/reusables/Billboard";
import FeaturePanel from "@/components/reusables/FeaturePanel"

export default {
    name: "Home",
    components: {
        Billboard,
        FeaturePanel
    },
    data() {
        return {
            panel1: {
                image: require("@/assets/Illustrations/blockchain.svg"),
                imageDescription: "Blockchain nodes",
                title: "Our blockchain is built on Hyperledger Iroha",
                button: "Read more about Iroha"
            },

            panel2: {
                image: require("@/assets/Illustrations/planet.svg"),
                imageDescription: "Planet",
                title: "Join our free world for open ideas",
                button: "Learn about free software"
            },

            panel3: {
                image: require("@/assets/Illustrations/framework.svg"),
                imageDescription: "Flow of platform",
                title: "Creating trustworthy data from each task",
                button: "Join us now"
            }
        }
    }
};
</script>

<style lang="less" scoped>

</style>