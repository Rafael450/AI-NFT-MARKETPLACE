import { AvatarImage } from "@taikai/rocket-kit"
import { Container, Title } from "@/styles/home"

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
                        <Container
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <AvatarImage
                                style={{
                                    width: "calc(33.33 % - 10px)",
                                    marginRight: "10px"
                                }}
                                size={200}
                            />
                            <p style={{fontWeight: "500", fontSize: "40px"}}>{`NFT ${i["url"]}`}</p>
                        </Container>
                    )
                })}
            </Container>

        </Container>
    )
}
