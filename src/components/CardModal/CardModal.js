import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const CardModal = () => (
  <Modal>
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

export default CardModal;