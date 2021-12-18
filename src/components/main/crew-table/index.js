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
    console.log(data);
    return `
      ${data
        .map(
          (name, index) => `
            <tr>
              <td>${index + 1}</td>
              <td>${name}</td>
              <td>
                <button class="${ID.DELETE_CREW_BUTTON}">삭제</button>
              </td>
            </tr>`
        )
        .join('')}
    `;
  }
}