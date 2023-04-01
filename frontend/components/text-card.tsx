import { Container, Title } from "@/styles/home"

export default function TextCard () {
    return(
        <Container
            style={{
                background: "white",
                height: "50%"
            }}
        >
            <Container
                style={{
                    width: "85%",
                    color: "white",
                    background: "black",
                    margin: "0 auto 100px",
                    borderRadius: "5px",
                    textAlign: "center",
                    justifyContent: "center",
                    lineHeight: "6.2rem",
                }}
            >
                {/* <Title>How it works?</Title>
                <Title>Mint your own NFT using AI to fuel your imagination.</Title>
                <Title>You can instantly buy our tokens without taxes and earn them by selling your art.</Title> */}
                <Title
                    style={{fontWeight: "600"}}
                >How it works? <br></br>Mint your own NFT using AI to fuel your imagination. <br></br>You can instantly buy our tokens without taxes and earn them by selling your art.</Title>
            </Container>
        </Container>
    )
}