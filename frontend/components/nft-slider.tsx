import { AvatarImage } from "@taikai/rocket-kit"
import { Container, Title } from "@/styles/home"
import NftCard from "./nft-card"

let array_imgs: { [key: string]: string }[] = [
    { "url": "a" }, { "url": "b" }, { "url": "c" },
    { "url": "d" }, { "url": "e" }, { "url": "f" }, 
]

export default function NftSlider() {
    return (
        <Container
            style={{
                background: "white",
                color: "#41424c",
                textAlign: "center",
                height: "70%"
            }}
        >
            <Title style={{ marginTop: "50px", fontSize: "40px" }}>NFT Marketplace</Title>
            <Container
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    marginTop: "50px",
                    height: "60%"
                }}
            >
                {array_imgs.map(i => {
                    return (
                        <NftCard nft={i}/>
                    )
                })}
            </Container>

        </Container>
    )
}
