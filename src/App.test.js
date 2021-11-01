import { render, cleanup } from '@testing-library/react';
import Header from './components/Header';
import Banner from './components/Banner';
import { shallow } from 'enzyme';
import {getGifRequest} from './api';
import axios from 'axios';
import '@testing-library/jest-dom/extend-expect';
// Enable API mocking before tests.
jest.mock('axios', () => jest.fn(() => Promise.resolve(body)));

const body = {
  "data":[
    {
      "type": "gif",
      "id": "lJNoBCvQYp7nq",
      "url": "https://giphy.com/gifs/reddit-doing-lJNoBCvQYp7nq",
      "slug": "reddit-doing-lJNoBCvQYp7nq",
      "bitly_gif_url": "http://gph.is/1d7a84d",
      "bitly_url": "http://gph.is/1d7a84d",
      "embed_url": "https://giphy.com/embed/lJNoBCvQYp7nq",
      "username": "",
      "source": "http://www.reddit.com/r/gifs/comments/3ahlf9/reddit_hq_doing_their_thing/",
      "title": "Cat Working GIF",
      "rating": "pg",
      "content_url": "",
      "source_tld": "www.reddit.com",
      "source_post_url": "http://www.reddit.com/r/gifs/comments/3ahlf9/reddit_hq_doing_their_thing/",
      "is_sticker": 0,
      "import_datetime": "2015-06-20 06:43:34",
      "trending_datetime": "2015-06-22 23:13:56",
      "images": {
        "original": {
          "height": "480",
          "width": "480",
          "size": "2488933",
          "url": "https://media2.giphy.com/media/lJNoBCvQYp7nq/giphy.gif?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=giphy.gif&ct=g",
          "mp4_size": "168006",
          "mp4": "https://media2.giphy.com/media/lJNoBCvQYp7nq/giphy.mp4?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=giphy.mp4&ct=g",
          "webp_size": "365746",
          "webp": "https://media2.giphy.com/media/lJNoBCvQYp7nq/giphy.webp?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=giphy.webp&ct=g",
          "frames": "25",
          "hash": "fa0954dc85444ca9eba505a5e772a03c"
        },
        "downsized": {
          "height": "480",
          "width": "480",
          "size": "1270124",
          "url": "https://media2.giphy.com/media/lJNoBCvQYp7nq/giphy-downsized.gif?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=giphy-downsized.gif&ct=g"
        },
        "downsized_large": {
          "height": "480",
          "width": "480",
          "size": "2488933",
          "url": "https://media2.giphy.com/media/lJNoBCvQYp7nq/giphy.gif?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=giphy.gif&ct=g"
        },
        "downsized_medium": {
          "height": "480",
          "width": "480",
          "size": "2488933",
          "url": "https://media2.giphy.com/media/lJNoBCvQYp7nq/giphy.gif?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=giphy.gif&ct=g"
        },
        "downsized_small": {
          "height": "428",
          "width": "428",
          "mp4_size": "55879",
          "mp4": "https://media2.giphy.com/media/lJNoBCvQYp7nq/giphy-downsized-small.mp4?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=giphy-downsized-small.mp4&ct=g"
        },
        "downsized_still": {
          "height": "480",
          "width": "480",
          "size": "51034",
          "url": "https://media2.giphy.com/media/lJNoBCvQYp7nq/giphy-downsized_s.gif?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=giphy-downsized_s.gif&ct=g"
        },
        "fixed_height": {
          "height": "200",
          "width": "200",
          "size": "363455",
          "url": "https://media2.giphy.com/media/lJNoBCvQYp7nq/200.gif?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=200.gif&ct=g",
          "mp4_size": "39631",
          "mp4": "https://media2.giphy.com/media/lJNoBCvQYp7nq/200.mp4?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=200.mp4&ct=g",
          "webp_size": "97828",
          "webp": "https://media2.giphy.com/media/lJNoBCvQYp7nq/200.webp?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "200",
          "size": "118996",
          "url": "https://media2.giphy.com/media/lJNoBCvQYp7nq/200_d.gif?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=200_d.gif&ct=g",
          "webp_size": "57010",
          "webp": "https://media2.giphy.com/media/lJNoBCvQYp7nq/200_d.webp?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "100",
          "size": "125773",
          "url": "https://media2.giphy.com/media/lJNoBCvQYp7nq/100.gif?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=100.gif&ct=g",
          "mp4_size": "18309",
          "mp4": "https://media2.giphy.com/media/lJNoBCvQYp7nq/100.mp4?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=100.mp4&ct=g",
          "webp_size": "40404",
          "webp": "https://media2.giphy.com/media/lJNoBCvQYp7nq/100.webp?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=100.webp&ct=g"
        },
        "fixed_height_small_still": {
          "height": "100",
          "width": "100",
          "size": "5786",
          "url": "https://media2.giphy.com/media/lJNoBCvQYp7nq/100_s.gif?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=100_s.gif&ct=g"
        },
        "fixed_height_still": {
          "height": "200",
          "width": "200",
          "size": "15218",
          "url": "https://media2.giphy.com/media/lJNoBCvQYp7nq/200_s.gif?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=200_s.gif&ct=g"
        },
        "fixed_width": {
          "height": "200",
          "width": "200",
          "size": "363455",
          "url": "https://media2.giphy.com/media/lJNoBCvQYp7nq/200w.gif?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=200w.gif&ct=g",
          "mp4_size": "39631",
          "mp4": "https://media2.giphy.com/media/lJNoBCvQYp7nq/200w.mp4?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=200w.mp4&ct=g",
          "webp_size": "97828",
          "webp": "https://media2.giphy.com/media/lJNoBCvQYp7nq/200w.webp?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "200",
          "width": "200",
          "size": "118996",
          "url": "https://media2.giphy.com/media/lJNoBCvQYp7nq/200w_d.gif?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=200w_d.gif&ct=g",
          "webp_size": "57010",
          "webp": "https://media2.giphy.com/media/lJNoBCvQYp7nq/200w_d.webp?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "100",
          "width": "100",
          "size": "125773",
          "url": "https://media2.giphy.com/media/lJNoBCvQYp7nq/100w.gif?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=100w.gif&ct=g",
          "mp4_size": "18309",
          "mp4": "https://media2.giphy.com/media/lJNoBCvQYp7nq/100w.mp4?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=100w.mp4&ct=g",
          "webp_size": "40404",
          "webp": "https://media2.giphy.com/media/lJNoBCvQYp7nq/100w.webp?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=100w.webp&ct=g"
        },
        "fixed_width_small_still": {
          "height": "100",
          "width": "100",
          "size": "5786",
          "url": "https://media2.giphy.com/media/lJNoBCvQYp7nq/100w_s.gif?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=100w_s.gif&ct=g"
        },
        "fixed_width_still": {
          "height": "200",
          "width": "200",
          "size": "15218",
          "url": "https://media2.giphy.com/media/lJNoBCvQYp7nq/200w_s.gif?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=200w_s.gif&ct=g"
        },
        "looping": {
          "mp4_size": "3596734",
          "mp4": "https://media2.giphy.com/media/lJNoBCvQYp7nq/giphy-loop.mp4?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=giphy-loop.mp4&ct=g"
        },
        "original_still": {
          "height": "480",
          "width": "480",
          "size": "151823",
          "url": "https://media2.giphy.com/media/lJNoBCvQYp7nq/giphy_s.gif?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=giphy_s.gif&ct=g"
        },
        "original_mp4": {
          "height": "480",
          "width": "480",
          "mp4_size": "168006",
          "mp4": "https://media2.giphy.com/media/lJNoBCvQYp7nq/giphy.mp4?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=giphy.mp4&ct=g"
        },
        "preview": {
          "height": "214",
          "width": "214",
          "mp4_size": "19402",
          "mp4": "https://media2.giphy.com/media/lJNoBCvQYp7nq/giphy-preview.mp4?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=giphy-preview.mp4&ct=g"
        },
        "preview_gif": {
          "height": "70",
          "width": "70",
          "size": "49499",
          "url": "https://media2.giphy.com/media/lJNoBCvQYp7nq/giphy-preview.gif?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=giphy-preview.gif&ct=g"
        },
        "preview_webp": {
          "height": "132",
          "width": "132",
          "size": "36056",
          "url": "https://media2.giphy.com/media/lJNoBCvQYp7nq/giphy-preview.webp?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=giphy-preview.webp&ct=g"
        },
        "hd": {
          "height": "720",
          "width": "720",
          "mp4_size": "897164",
          "mp4": "https://media2.giphy.com/media/lJNoBCvQYp7nq/giphy-hd.mp4?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=giphy-hd.mp4&ct=g"
        },
        "480w_still": {
          "height": "480",
          "width": "480",
          "size": "2488933",
          "url": "https://media2.giphy.com/media/lJNoBCvQYp7nq/480w_s.jpg?cid=b983cf4e5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j&rid=480w_s.jpg&ct=g"
        }
      },
      "analytics_response_payload": "e=Z2lmX2lkPWxKTm9CQ3ZRWXA3bnEmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1iOTgzY2Y0ZTVqZzhianFid2tjNHVraHJnbnE0N3pvNnJxN2Mzem50dzl3bHA0MWomY3Q9Zw",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWxKTm9CQ3ZRWXA3bnEmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1iOTgzY2Y0ZTVqZzhianFid2tjNHVraHJnbnE0N3pvNnJxN2Mzem50dzl3bHA0MWomY3Q9Zw&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWxKTm9CQ3ZRWXA3bnEmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1iOTgzY2Y0ZTVqZzhianFid2tjNHVraHJnbnE0N3pvNnJxN2Mzem50dzl3bHA0MWomY3Q9Zw&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWxKTm9CQ3ZRWXA3bnEmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1iOTgzY2Y0ZTVqZzhianFid2tjNHVraHJnbnE0N3pvNnJxN2Mzem50dzl3bHA0MWomY3Q9Zw&action_type=SENT"
        }
      }
    },
  ],
  "pagination": {
    "total_count": 39178,
    "count": 5,
    "offset": 60
  },
  "meta": {
    "status": 200,
    "msg": "OK",
    "response_id": "5jg8bjqbwkc4ukhrgnq47zo6rq7c3zntw9wlp41j"
  }
};
afterEach(cleanup);


test('Render the Application Header', () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId('header_with_GifSearch_button')).toHaveTextContent(
    'GifSearch'
  );
  expect(getByTestId('header_with_Reactions_button')).toHaveTextContent(
    'Reactions'
  );
  expect(getByTestId('header_with_Entertainment_button')).toHaveTextContent(
    'Entertainment'
  );
  expect(getByTestId('header_with_Sports_button')).toHaveTextContent('Sports');
  expect(getByTestId('header_with_Stickers_button')).toHaveTextContent(
    'Stickers'
  );
  expect(getByTestId('header_with_Artists_button')).toHaveTextContent(
    'Artists'
  );
  expect(getByTestId('header_with_Cartoon_button')).toHaveTextContent(
    'Cartoon'
  );
});

describe('<Banner />', () => {
  it('renders an image', () => {
    const banner = shallow(<Banner />);
    expect(banner.find('img').prop('src')).toEqual(
      'https://media.giphy.com/headers/2019-03-08-38-1552063105/WHM_BANNER_HP.gif'
    );
  });
});

describe('Client Mock Api', () => {
  it('should call axios and return a response', async () => {
    const response = await getGifRequest('http://localhost/', 'GET');
    expect(axios).toHaveBeenCalled();
    expect(response).toEqual(body);
  });
});
