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
            :panel-button="panel1.button"
            :panel-link="panel1.link">

        </FeaturePanel>

        <FeaturePanel
            :panel-image="panel2.image"
            :panel-image-description="panel2.imageDescription"
            :panel-title="panel2.title"
            :panel-button="panel2.button"
            :panel-link="panel2.link">

        </FeaturePanel>

        <FeaturePanel
            :panel-image="panel3.image"
            :panel-image-description="panel3.imageDescription"
            :panel-title="panel3.title"
            :panel-button="panel3.button"
            :panel-link="panel3.link">

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
                button: "Read more about Iroha",
                link: "/about"
            },

            panel2: {
                image: require("@/assets/Illustrations/planet.svg"),
                imageDescription: "Planet",
                title: "Join our free world for open ideas",
                button: "Learn about free software",
                link:"/about"
            },

            panel3: {
                image: require("@/assets/Illustrations/framework.svg"),
                imageDescription: "Flow of platform",
                title: "Creating trustworthy data from each task",
                button: "Join us now",
                link: ""
            }
        }
    }
};
</script>

<style lang="less" scoped>

</style>