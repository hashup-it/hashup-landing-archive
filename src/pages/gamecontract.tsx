import Header from "components/pages/gamecontract/Header"
import License from "components/pages/gamecontract/License"
import Settings from "components/pages/gamecontract/Settings"
import Faq from "components/shared/Faq"

const GameContract = () => (
    <>
        <Header />
        <License />
        <Settings />
        <Faq
            items={[
                {
                    question: "Mauris metus nulla, porttitor eget dui sit amet?",
                    answer: "Donec at lobortis arcu. Mauris libero nibh, ornare ultricies augue vitae, consectetur fermentum ante. Sed tempus ornare orci, semper placerat massa laoreet vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit amet sem eget mi semper malesuada. Donec ac diam nec nulla rutrum tincidunt. Vivamus consectetur eros metus, nec hendrerit orci ultricies non.",
                },
                {
                    question: "Mauris metus nulla, porttitor eget dui sit amet?",
                    answer: "Donec at lobortis arcu. Mauris libero nibh, ornare ultricies augue vitae, consectetur fermentum ante. Sed tempus ornare orci, semper placerat massa laoreet vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit amet sem eget mi semper malesuada. Donec ac diam nec nulla rutrum tincidunt. Vivamus consectetur eros metus, nec hendrerit orci ultricies non.",
                },
                {
                    question: "Mauris metus nulla, porttitor eget dui sit amet?",
                    answer: "Donec at lobortis arcu. Mauris libero nibh, ornare ultricies augue vitae, consectetur fermentum ante. Sed tempus ornare orci, semper placerat massa laoreet vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit amet sem eget mi semper malesuada. Donec ac diam nec nulla rutrum tincidunt. Vivamus consectetur eros metus, nec hendrerit orci ultricies non.",
                },
                {
                    question: "Mauris metus nulla, porttitor eget dui sit amet?",
                    answer: "Donec at lobortis arcu. Mauris libero nibh, ornare ultricies augue vitae, consectetur fermentum ante. Sed tempus ornare orci, semper placerat massa laoreet vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit amet sem eget mi semper malesuada. Donec ac diam nec nulla rutrum tincidunt. Vivamus consectetur eros metus, nec hendrerit orci ultricies non.",
                },
            ]}
        />
    </>
)

export default GameContract
