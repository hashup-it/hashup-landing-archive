import { StyledSocialArea, StyledSection } from "./index.styles"
import { assetsUrl, SocialMediaUrls } from "config"
import {
    DiscordBlockButton,
    LinkedInBlockButton,
    SocialBox,
    TelegramBlockButton,
    TwitterBlockButton,
} from "components/shared/Community"

const Community = () => (
    <StyledSection>
        <StyledSocialArea>
            <TelegramBlockButton />
            <DiscordBlockButton />
            <TwitterBlockButton />
            <LinkedInBlockButton />
        </StyledSocialArea>
    </StyledSection>
)

export default Community
