import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react'
import CardDetails from '../CardDetails/CardDetails';

export default class CardModal extends Component {

  static propTypes = {
    card: PropTypes.object,
  };

  render() {
    if (!this.props.card) {
      return null;
    }

    return (
      <Modal open={this.props.isOpened} onClose={this.props.onClose}>
        <Modal.Header>{this.props.card.title}</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <CardDetails card={this.props.card} />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}
