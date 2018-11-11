import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listArticleTitle: {
    fontWeight: '600',
    textTransform: 'capitalize',
    padding: 10,
  },
  listArticleBody: {
    color: '#222',
    padding: 10,
  },
  listArticleActions: {
    fontSize: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5,
    padding: 10,
  },
  listArticleActionsLabel: {
    fontSize: 20,
  },
  splashHeader: {
    fontSize: 30,
  },
  actionButtonWrapper: {
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
  },
  padTop: {
    marginTop: 60,
  },
});

export default styles;
