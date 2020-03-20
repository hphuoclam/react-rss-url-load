import React from "react";
import { connect } from "react-redux";
import { isArray } from "lodash";
import { Box, TextField, Button, Card, CardContent, Typography } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';

import getRSS from "../../config/rss-parser";
// import { rssLists } from "../../config";

class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: null,
      feeds: null,
      rssInput: null
    }

    this.loadRss = this.loadRss.bind(this);
  }

  loadRss(rssInput) {
    this.setState({ loading: true, error: null, feeds: null });
    getRSS(rssInput, (err, feed) => {
      err && this.setState({ error: "Has Error" })
      console.log('==feed==', feed)
      feed && this.setState({ loading: false, feeds: feed });
      this.setState({ loading: false });
    })
  }

  onChange(e) {
    const value = e.target.value;
    value && this.setState({ rssInput: value })
  }

  onSubmit(e) {
    e.preventDefault();
    const { rssInput } = this.state;
    rssInput && this.loadRss(rssInput)
  }

  renderContent(item, key) {
    return (
      <Box mb={2} key={key} >
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              {item.title}
            </Typography>
            <Typography variant="body2" component="p" dangerouslySetInnerHTML={{ __html: item.content }} />
          </CardContent>
        </Card>
      </Box>
    )
  }

  render() {
    const { loading, feeds, error } = this.state;
    return (
      <div className="HomePage">
        <h1>Home Page</h1>
        <h3>Get content from rss url</h3>
        <Box mb={2} mt={3}>
          <form autoComplete="off" onSubmit={this.onSubmit.bind(this)}>
            <TextField type="url" id="rssInput" name="rssInput" onChange={this.onChange.bind(this)} label="Enter RSS URL" required />
            <Button type="submit" color="primary" variant="contained">Get Content</Button>
          </form>
        </Box>
        <Box mb={2} mt={2}>
          {loading && <Alert severity="info">Loading...</Alert>}
          {error && <Alert severity="error">{error}</Alert>}
        </Box>
        {feeds && feeds.items && feeds.items.length > 0 && feeds.items.map((v, k) => this.renderContent(v, k))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(HomePage);
