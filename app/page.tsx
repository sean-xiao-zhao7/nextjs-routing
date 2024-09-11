import logo from "../assets/logo.jpg";

export default function HomePage() {
    return (
        <div id="home">
            <img src={logo.src} alt="A newspaper" />
            <p>
                In recent years, the global energy landscape has been undergoing
                a significant transformation, driven by advancements in
                renewable energy technologies and a growing commitment to combat
                climate change.
            </p>
            <p>
                This shift is marked by increasing investments in solar, wind,
                and other sustainable energy sources, as well as supportive
                policies and international agreements aimed at reducing
                greenhouse gas emissions. One of the most notable developments
                in this arena is the continued decline in the cost of renewable
                energy technologies.{" "}
            </p>
            <p>
                According to the International Renewable Energy Agency (IRENA),
                the cost of solar photovoltaic (PV) systems has dropped by over
                80% in the past decade. This dramatic decrease is attributed to
                technological advancements, economies of scale, and increased
                competition within the market.
            </p>
        </div>
    );
}
