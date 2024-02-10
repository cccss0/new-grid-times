import React from 'react';
import styled from 'styled-components/macro';

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { COLORS, QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <VerticalStoryWrapper key={story.id}>
              <SecondaryStory {...story} />
            </VerticalStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <VerticalStoryWrapper key={story.id}>
              <OpinionStory {...story} />
            </VerticalStoryWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    padding: 20px;
    gap: 48px 0px;
  }

  @media ${QUERIES.tabletOnly} {
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    grid-template-columns: 2fr 1fr;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';

    grid-template-columns: 5fr 4fr 3fr;
    gap: 0px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    padding-right: 20px;
    margin-right: 20px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  background-color: var(--color-gray-100);

  @media ${QUERIES.laptopAndUp} {
    padding-right: 20px;
    margin-right: 20px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionStoryList = styled(StoryList)`
  background-color: var(--color-gray-100);
  @media ${QUERIES.tabletOnly} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 30px;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.laptopAndUp} {
    margin-top: -8px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    padding-top: 20px;
    margin-top: 20px;
    border-top: 1px solid var(--color-gray-300);
  }
`;

const VerticalStoryWrapper = styled.div`
  &:not(:last-of-type) {
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-gray-300);
    margin-bottom: 16px;
  }

  @media ${QUERIES.tabletOnly} {
    &:not(:last-of-type) {
      padding-bottom: revert;
      border-bottom: revert;
      margin-bottom: revert;
    }
  }
`;

export default MainStoryGrid;
