import TradingViewWidget from "@/components/TradingViewWidget";

export default function Tradeview({ params }) {
    const pair = params.pair;

    return (
        <main>
            A{pair}
            <section style={{ height: "610px"}}>
                <TradingViewWidget />
            </section>
        </main>
    );
}
