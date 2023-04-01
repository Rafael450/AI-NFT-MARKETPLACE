import { Container } from "@/styles/home"
import { AvatarImage, Button } from "@taikai/rocket-kit"

export default function NftCard(props: any) {
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
            <div
                style={{
                    marginTop: "30px",
                    marginBottom: "80px",
                    display: "flex",
                    background: "#94A4A6",
                    height: "70px",
                    width: "330px",
                    borderRadius: "5px",
                    color: "white",
                    fontSize: "1.5rem",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}
            >
                <span style={{marginLeft: "15px"}}>GenIA: _________</span>
                <Button
                    ariaLabel="sell"
                    className="button"
                    color="white"
                    txtColor="black"
                    value="Buy"
                    variant="solid"
                    action={() => alert("teste")}
                    style={{
                        marginRight: "15px",
                        height: "45px",
                        width: "140px",
                        fontSize: "10rem"
                    }}
                />
            </div>
        </Container>
    )
}