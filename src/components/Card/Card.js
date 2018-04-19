import React, {Component} from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import UserAvatar from '../../components/UserAvatar/UserAvatar';
import './Card.scss';

export default class Card extends Component {

  static propTypes = {
    card: PropTypes.object.isRequired,
    openCardModal: PropTypes.func.isRequired,
  };

  openModal = () => {
    this.props.openCardModal(this.props.card);
  };

  render() {
    const {card} = this.props;
    return (
      <div className="card" onClick={this.openModal}>
        {card.image && (
          <div className="card__image">
            <img src={card.image} />
          </div>
        )}
        {card.tags && card.tags.length > 0 && (
          <div className="card__tag-block">
            {map(card.tags, (t) => (
              <div className={`card__tag card__tag--${t.color}`} key={t.id} />
            ))}
          </div>
        )}
        {card.title}
        {card.assignees && card.assignees.length > 0 && (
          <div className="card__assignees-block">
            {map(card.assignees, (a) => (
              <div className='card__assignee' key={a.id}>
                <UserAvatar user={a} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
