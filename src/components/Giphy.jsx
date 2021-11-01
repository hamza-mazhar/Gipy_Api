import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import GifList from './GifList';
import HeadInterface from './Header';
import SearchForm from './Search';
import Banner from './Banner';
import Loader from './Loding';
import { getGifRequest } from '../api';
const base_url = process.env.REACT_APP_GIPHY_URL;
const apiKey = process.env.REACT_APP_API_KEY;

class Giphy extends React.Component {
  state = {
    data: [],
    search: '',
    total_items: {},
    currentPage: 1,
    itemsPerPage: 50,
    inverse: false,
    loading: false,
  };
  componentDidMount() {
    const { search, itemsPerPage, currentPage } = this.state;
    this.fetchData(search, itemsPerPage, currentPage);
  }
  fetchData = async (search, itemsPerPage, currentPage) => {
    try {
      this.setState({ loading: true });
      let url = `${base_url}/trending?api_key=${apiKey}&limit=${itemsPerPage}&offset=${
        (currentPage - 1) * itemsPerPage
      }`;
      url = search
        ? `${base_url}/search?q=${search}&api_key=${apiKey}&limit=${itemsPerPage}&offset=${
            (currentPage - 1) * itemsPerPage
          }`
        : url;
      const results = await getGifRequest(url, 'Get');
      this.setState({
        data: this.state.data.concat(results.data.data),
        currentPage: this.state.currentPage + 1,
        search: search,
        inverse: false,
        loading: false,
      });
    } catch (err) {
      this.setState({ loading: false });
    }
  };
  fetchMoreData = () => {
    setTimeout(async () => {
      const { search, itemsPerPage, currentPage } = this.state;
      await this.fetchData(search, itemsPerPage, currentPage);
    }, 1500);
  };
  headerButton = (text) => {
    this.setState({ data: [], inverse: true, currentPage: 1 });
    this.fetchData(text, 50, 1);
  };
  performSearch = (query = 'cats') => {
    this.setState({ data: [], inverse: true, currentPage: 1 });
    this.fetchData(query, 50, 1);
  };
  render() {
    const { data, search, loading } = this.state;
    return (
      <div className="m-2">
        <div className="main-header">
          <div className="inner">
            <HeadInterface headerButton={this.headerButton} />
            <SearchForm onSearch={this.performSearch} search={search} />
            <Banner />
          </div>
        </div>
        <div
          id="scrollableDiv"
          className="main-content"
          key={this.state.search}
          style={{
            height: 500,
            overflow: 'auto',
          }}
        >
          <InfiniteScroll
            dataLength={data.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={loading ? <Loader data-testid="loading" /> : <></>}
            scrollableTarget="scrollableDiv"
            inverse={this.state.inverse}
          >
            <GifList data={data} />
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}
export default Giphy;
