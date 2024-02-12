import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import * as Sentry from '@sentry/react-native';

export class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  static getDerivedStateFromError(error) {
    return {error: true};
  }

  componentDidCatch(error, errorInfo) {
    console.log('blarg:', errorInfo);
    Sentry.captureException(errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <View style={styles.error}>
          <Text>
            we know there is an error, we are working on it, come back here soon
          </Text>
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

const styles = StyleSheet.create({
  error: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
