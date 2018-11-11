import React, { Component } from 'react';
import {
  Text, View, FlatList, TouchableHighlight, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Progress from 'react-native-progress';
import { Actions } from 'react-native-router-flux';
import { fetchArticles } from '../actions/ArticlesActions';
import styles from '../styles';

const ActionButton = (props) => {
  const { label, icon, action } = props;
  return (
    <TouchableOpacity onPress={action}>
      <View style={styles.actionButtonWrapper}>
        <Icon name={icon} size={20} />
        <Text style={styles.listArticleActionsLabel}>
          {label}
          &nbsp;&nbsp;&nbsp;
        </Text>
      </View>
    </TouchableOpacity>
  );
};

class Articles extends Component {
  state = {
    refreshing: false,
  };

  componentDidMount() {
    const { getArticles } = this.props;
    getArticles().then(() => this.setState({ refreshing: false }));
  }

  refreshArticles = () => {
    this.setState({ refreshing: true });
    const { getArticles } = this.props;
    getArticles().then(() => this.setState({ refreshing: false }));
  };

  render() {
    const {
      articles: { articles, loading, message },
    } = this.props;
    const { refreshing } = this.state;
    return (
      <View style={styles.container}>
        {loading && !refreshing ? (
          <View style={styles.center}>
            <Progress.Circle size={60} indeterminate color="#555" />
            <Text>
              {'\n'}
              {message}
            </Text>
          </View>
        ) : (
          <FlatList
            data={articles}
            keyExtractor={article => String(article.id)}
            refreshing={refreshing}
            onRefresh={this.refreshArticles}
            renderItem={({ item: article }) => (
              <TouchableHighlight
                onPress={() => alert('To be Implemented later.')}
                underlayColor="rgba(25, 43, 62, 0.1)"
              >
                <View style={styles.listArticleRow}>
                  <Text style={styles.listArticleTitle}>{article.title}</Text>
                  <Text style={styles.listArticleBody}>{article.body}</Text>
                  <View style={styles.listArticleActions}>
                    <ActionButton label="400" icon="eyeo" action={() => false} />
                    <ActionButton
                      label="400"
                      icon="arrowup"
                      action={() => alert('Upvote 🤗 🤗 🤗 🤗 🤗 🤗, Coming soon')}
                    />
                    <ActionButton
                      label="400"
                      icon="arrowdown"
                      action={() => alert('Downvote ☹️ ☹ ️☹️ ☹️ ☹️ ☹️ ☹️, Coming soon')}
                    />
                  </View>
                </View>
              </TouchableHighlight>
            )}
          />
        )}
        <TouchableHighlight
          style={{
            backgroundColor: '#28628d',
            position: 'absolute',
            bottom: 10,
            right: 10,
            padding: 20,
            borderRadius: 30,
            height: 60,
            width: 60,
            zIndex: 1000,
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
          }}
          onPress={() => Actions.post()}
        >
          <View>
            <Icon name="eyeo" color="#fff" size={20} />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles,
});

const mapDispatchToProps = dispatch => ({
  getArticles: () => dispatch(fetchArticles()),
});

ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  action: PropTypes.func,
};

ActionButton.defaultProps = {
  action: () => false,
};

Articles.propTypes = {
  getArticles: PropTypes.func.isRequired,
  articles: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        body: PropTypes.string.isRequired,
      }),
    ),
  }),
};

Articles.defaultProps = {
  articles: {
    articles: [],
  },
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Articles);
