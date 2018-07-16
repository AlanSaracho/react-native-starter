import React, {Component} from 'react';
import {View, Button} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Proptypes from 'prop-types';
import {replace} from 'lodash';

import {PrometiumLoading} from '../../components';
import MyCustomText from './components/MyCustomText';
import styles from './styles';
import * as actions from '../../modules/projects/reducers';
import {POEM} from '../../utils/constants';

class HelloPrometium extends Component {
    static propTypes = {
        addProject: Proptypes.func.isRequired,
        projects: Proptypes.shape({}).isRequired
    }

    handleAddProject() {
        const {addProject} = this.props;
        addProject();
    }

    render() {
        const {projects} = this.props;
        return (
            <View style={styles.container}>
                <PrometiumLoading/>
                <Button
                    onPress={() => this.handleAddProject()}
                    title="Add project!"
                />
                {projects.amount > 0 && (
                    <MyCustomText>
                        {replace(POEM, /@@/g, projects.amount)}
                    </MyCustomText>
                )}
            </View>
        );
    }
}

const mapStateToProps = state => ({projects: state.projects});
const mapDispatchToProps = dispatch => (bindActionCreators(actions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(HelloPrometium);
