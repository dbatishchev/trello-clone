import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class CardModal extends Component {

  static propTypes = {
    // card: PropTypes.object.isRequired,
  };

  render() {
    console.log(this.props);
    return (
      <Modal open={this.props.isOpened} onClose={this.props.onClose}>
        <Modal.Header>Profile Picture</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>Modal Header</Header>
            <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary>
            Proceed <Icon name='right chevron' />
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}