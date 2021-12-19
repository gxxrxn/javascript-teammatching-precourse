import { ID, COURSE_TYPE } from '../../../constants/index.js';
import Component from '../../../core/Component.js';

export default class CrewTable extends Component {
  template() {
    const { data } = this.$props;
    return `
      <h3>${COURSE_TYPE[this.$props.type]} 크루 목록</h3>
      <table id=${ID.CREW_TABLE} border="1">
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          ${this.getCrewTableRow(data)}
        </tbody>
      </table>
    `;
  }

  getCrewTableRow(data) {
    return `
      ${data
        .map(
          (name, index) => `
            <tr>
              <td >${index + 1}</td>
              <td data-crew-name="${name}">${name}</td>
              <td>
                <button data-seq="${index}" class="${ID.DELETE_CREW_BUTTON}">삭제</button>
              </td>
            </tr>`
        )
        .join('')}
    `;
  }

  setEvent() {
    const { type, deleteCrew } = this.$props;

    this.addEvent('click', `.${ID.DELETE_CREW_BUTTON}`, ({ target }) => {
      deleteCrew(type, target.closest('[data-seq]').dataset.seq);
    });
  }
}
