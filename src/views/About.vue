<template>
    <div id="about-comp">

        <Billboard
            billboard-title="Powerful features"
            billboard-catchphrase="Understand basic concepts about Instrumentality">

        </Billboard>

        <SectionPanel
            :panel-image="panel1.image"
            :panel-image-description="panel1.imageDescription"
            :panel-title="panel1.title"
            :panel-intro="panel1.intro">

        </SectionPanel>

        <BlockchainSection />

        <SectionPanel
            :panel-image="panel2.image"
            :panel-image-description="panel2.imageDescription"
            :panel-title="panel2.title"
            :panel-intro="panel2.intro">

        </SectionPanel>

        <FreeSoftwareSection />

    </div>
</template>

<script>
import Billboard from "@/components/reusables/Billboard";
import SectionPanel from "@/components/reusables/SectionPanel";
import BlockchainSection from "@/components/BlockchainSection";
import FreeSoftwareSection from "@/components/FreeSoftwareSection";

export default {
    name: 'About',
    components: {
        Billboard,
        SectionPanel,
        BlockchainSection,
        FreeSoftwareSection
    },
    data() {
        return {
            panel1: {
                image: require("@/assets/Illustrations/iroha.svg"),
                imageDescription: "Iroha nodes in a network",
                title: "Discover Hyperledger Iroha",
                intro: "Get an overview of our blockchain system"
            },

            panel2: {
                image: require("@/assets/Illustrations/planet.svg"),
                imageDescription: "Palnet",
                title: "Discover Free Software",
                intro: "Why we steer away from porprietary models"
            }
        }
    }
}
</script>

<style lang="less" scoped>

</style>