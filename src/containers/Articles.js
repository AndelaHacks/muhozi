import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Progress from 'react-native-progress';
import { Actions } from 'react-native-router-flux';
import { fetchArticles } from '../actions/ArticlesActions';
import styles from '../styles';

const ActionButton = (props) => {
  const {
    label, icon, action, success, danger,
  } = props;
  const color = (() => {
    if (success) {
      return 'rgb(52, 168, 83)';
    }
    if (danger) {
      return 'rgba(255, 0, 0, 0.71)';
    }
    return '#333';
  })();

  return (
    <TouchableOpacity onPress={action}>
      <View style={styles.actionButtonWrapper}>
        <Icon name={icon} size={20} color={color} />
        <Text style={[styles.listArticleActionsLabel, { color }]}>
          {label}
          &nbsp;&nbsp;&nbsp;
        </Text>
      </View>
    </TouchableOpacity>
  );
};

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(1000000));
}

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
        <StatusBar barStyle="light-content" />
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
            keyExtractor={article => article.uuid}
            refreshing={refreshing}
            onRefresh={this.refreshArticles}
            renderItem={({ item: article }) => (
              <TouchableHighlight
                onPress={() => alert('To be Implemented later.')}
                underlayColor="rgba(25, 43, 62, 0.1)"
              >
                <View style={styles.listArticleRow}>
                  <Text style={styles.listArticleTitle}>{article.title}</Text>
                  <Text style={styles.listArticleBody}>{article.description}</Text>
                  <View style={styles.listArticleActions}>
                    <ActionButton label={String(getRandomInt())} icon="eyeo" action={() => false} />
                    <ActionButton
                      label={String(getRandomInt())}
                      icon="arrowup"
                      action={() => alert('Upvote 🤗 🤗 🤗 🤗 🤗 🤗, Coming soon')}
                      success
                    />
                    <ActionButton
                      label={String(getRandomInt())}
                      icon="arrowdown"
                      action={() => alert('Downvote ☹️ ☹ ️☹️ ☹️ ☹️ ☹️ ☹️, Coming soon')}
                      danger
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
  danger: PropTypes.bool,
  success: PropTypes.bool,
};

ActionButton.defaultProps = {
  action: () => false,
  success: false,
  danger: false,
};

Articles.propTypes = {
  getArticles: PropTypes.func.isRequired,
  articles: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        uuid: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
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
