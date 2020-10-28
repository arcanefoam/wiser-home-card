import { css, CSSResult } from 'lit-element';
import { Style } from './styles';

export class Toast implements Style {
  styles(): CSSResult {
    return css`
      .container {
        width: 100%;
      }
      .grid {
        list-style: none;
        margin-left: -1.25em;
      }

      .grid__col--2-of-2,
      .grid__col--3-of-3,
      .grid__col--4-of-4,
      .grid__col--5-of-5,
      .grid__col--6-of-6,
      .grid__col--8-of-8,
      .grid__col--12-of-12 {
        width: 100%;
      }

      .grid__col--1-of-2,
      .grid__col--2-of-4,
      .grid__col--3-of-6,
      .grid__col--4-of-8,
      .grid__col--6-of-12 {
        width: 50%;
      }

      .grid__col--1-of-3,
      .grid__col--2-of-6,
      .grid__col--4-of-12 {
        width: 33.33333%;
      }

      .grid__col--2-of-3,
      .grid__col--4-of-6,
      .grid__col--8-of-12 {
        width: 66.66667%;
      }

      .grid__col--1-of-4,
      .grid__col--2-of-8,
      .grid__col--3-of-12 {
        width: 25%;
      }

      .grid__col--3-of-4,
      .grid__col--6-of-8,
      .grid__col--9-of-12 {
        width: 75%;
      }

      .grid__col--push-2-of-2,
      .grid__col--push-3-of-3,
      .grid__col--push-4-of-4,
      .grid__col--push-5-of-5,
      .grid__col--push-6-of-6,
      .grid__col--push-8-of-8,
      .grid__col--push-12-of-12 {
        margin-left: 100%;
      }

      .grid__col--push-1-of-2,
      .grid__col--push-2-of-4,
      .grid__col--push-3-of-6,
      .grid__col--push-4-of-8,
      .grid__col--push-6-of-12 {
        margin-left: 50%;
      }

      .grid__col--push-1-of-3,
      .grid__col--push-2-of-6,
      .grid__col--push-4-of-12 {
        margin-left: 33.33333%;
      }

      .grid__col--push-2-of-3,
      .grid__col--push-4-of-6,
      .grid__col--push-8-of-12 {
        margin-left: 66.66667%;
      }

      .grid__col--push-1-of-4,
      .grid__col--push-2-of-8,
      .grid__col--push-3-of-12 {
        margin-left: 25%;
      }

      .grid__col--push-3-of-4,
      .grid__col--push-6-of-8,
      .grid__col--push-9-of-12 {
        margin-left: 75%;
      }

      .grid__col--pull-2-of-2,
      .grid__col--pull-3-of-3,
      .grid__col--pull-4-of-4,
      .grid__col--pull-5-of-5,
      .grid__col--pull-6-of-6,
      .grid__col--pull-8-of-8,
      .grid__col--pull-12-of-12 {
        margin-left: -100%;
      }

      .grid__col--pull-1-of-2,
      .grid__col--pull-2-of-4,
      .grid__col--pull-3-of-6,
      .grid__col--pull-4-of-8,
      .grid__col--pull-6-of-12 {
        margin-left: -50%;
      }

      .grid__col--pull-1-of-3,
      .grid__col--pull-2-of-6,
      .grid__col--pull-4-of-12 {
        margin-left: -33.33333%;
      }

      .grid__col--pull-2-of-3,
      .grid__col--pull-4-of-6,
      .grid__col--pull-8-of-12 {
        margin-left: -66.66667%;
      }

      .grid__col--pull-1-of-4,
      .grid__col--pull-2-of-8,
      .grid__col--pull-3-of-12 {
        margin-left: -25%;
      }

      .grid__col--pull-3-of-4,
      .grid__col--pull-6-of-8,
      .grid__col--pull-9-of-12 {
        margin-left: -75%;
      }

      .grid__col--1-of-5 {
        width: 20%;
      }

      .grid__col--push-1-of-5 {
        margin-left: 20%;
      }

      .grid__col--pull-1-of-5 {
        margin-left: -20%;
      }

      .grid__col--2-of-5 {
        width: 40%;
      }

      .grid__col--push-2-of-5 {
        margin-left: 40%;
      }

      .grid__col--pull-2-of-5 {
        margin-left: -40%;
      }

      .grid__col--3-of-5 {
        width: 60%;
      }

      .grid__col--push-3-of-5 {
        margin-left: 60%;
      }

      .grid__col--pull-3-of-5 {
        margin-left: -60%;
      }

      .grid__col--4-of-5 {
        width: 80%;
      }

      .grid__col--push-4-of-5 {
        margin-left: 80%;
      }

      .grid__col--pull-4-of-5 {
        margin-left: -80%;
      }

      .grid__col--1-of-6 {
        width: 16.66667%;
      }

      .grid__col--push-1-of-6 {
        margin-left: 16.66667%;
      }

      .grid__col--pull-1-of-6 {
        margin-left: -16.66667%;
      }

      .grid__col--5-of-6 {
        width: 83.33333%;
      }

      .grid__col--push-5-of-6 {
        margin-left: 83.33333%;
      }

      .grid__col--pull-5-of-6 {
        margin-left: -83.33333%;
      }

      .grid__col--1-of-8 {
        width: 12.5%;
      }

      .grid__col--push-1-of-8 {
        margin-left: 12.5%;
      }

      .grid__col--pull-1-of-8 {
        margin-left: -12.5%;
      }

      .grid__col--3-of-8 {
        width: 37.5%;
      }

      .grid__col--push-3-of-8 {
        margin-left: 37.5%;
      }

      .grid__col--pull-3-of-8 {
        margin-left: -37.5%;
      }

      .grid__col--5-of-8 {
        width: 62.5%;
      }

      .grid__col--push-5-of-8 {
        margin-left: 62.5%;
      }

      .grid__col--pull-5-of-8 {
        margin-left: -62.5%;
      }

      .grid__col--7-of-8 {
        width: 87.5%;
      }

      .grid__col--push-7-of-8 {
        margin-left: 87.5%;
      }

      .grid__col--pull-7-of-8 {
        margin-left: -87.5%;
      }

      .grid__col--1-of-12 {
        width: 8.33333%;
      }

      .grid__col--push-1-of-12 {
        margin-left: 8.33333%;
      }

      .grid__col--pull-1-of-12 {
        margin-left: -8.33333%;
      }

      .grid__col--2-of-12 {
        width: 16.66667%;
      }

      .grid__col--push-2-of-12 {
        margin-left: 16.66667%;
      }

      .grid__col--pull-2-of-12 {
        margin-left: -16.66667%;
      }

      .grid__col--5-of-12 {
        width: 41.66667%;
      }

      .grid__col--push-5-of-12 {
        margin-left: 41.66667%;
      }

      .grid__col--pull-5-of-12 {
        margin-left: -41.66667%;
      }

      .grid__col--7-of-12 {
        width: 58.33333%;
      }

      .grid__col--push-7-of-12 {
        margin-left: 58.33333%;
      }

      .grid__col--pull-7-of-12 {
        margin-left: -58.33333%;
      }

      .grid__col--10-of-12 {
        width: 83.33333%;
      }

      .grid__col--push-10-of-12 {
        margin-left: 83.33333%;
      }

      .grid__col--pull-10-of-12 {
        margin-left: -83.33333%;
      }

      .grid__col--11-of-12 {
        width: 91.66667%;
      }

      .grid__col--push-11-of-12 {
        margin-left: 91.66667%;
      }

      .grid__col--pull-11-of-12 {
        margin-left: -91.66667%;
      }

      .grid__col {
        box-sizing: border-box;
        display: inline-block;
        margin-right: -0.25em;
        min-height: 1px;
        padding-left: 1.25em;
        vertical-align: top;
      }
      @media (max-width: 700px) {
        .grid__col {
          display: block;
          margin-left: 0;
          margin-right: 0;
          width: auto;
        }
      }
      @media (max-width: 700px) and (min-width: 480px) {
        .grid__col[class*='grid__col--m-'] {
          display: inline-block;
          margin-right: -0.24em;
        }
        .grid__col.grid__col--m-1-of-2,
        .grid__col.grid__col--m-2-of-4 {
          width: 50%;
        }
        .grid__col.grid__col--m-1-of-3 {
          width: 33.33333%;
        }
        .grid__col.grid__col--m-2-of-3 {
          width: 66.66667%;
        }
        .grid__col.grid__col--m-1-of-4 {
          width: 25%;
        }
        .grid__col.grid__col--m-3-of-4 {
          width: 75%;
        }
      }
      @media (max-width: 480px) {
        .grid__col[class*='grid__col--s-'] {
          display: inline-block;
          margin-right: -0.24em;
        }
        .grid__col.grid__col--s-1-of-2,
        .grid__col.grid__col--s-2-of-4 {
          width: 50%;
        }
        .grid__col.grid__col--s-1-of-3 {
          width: 33.33333%;
        }
        .grid__col.grid__col--s-2-of-3 {
          width: 66.66667%;
        }
        .grid__col.grid__col--s-1-of-4 {
          width: 25%;
        }
        .grid__col.grid__col--s-3-of-4 {
          width: 75%;
        }
      }

      .grid__col--centered {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      .grid__col--d-first {
        float: left;
      }

      .grid__col--d-last {
        float: right;
      }

      .grid--no-gutter {
        margin-left: 0;
        width: 100%;
      }
      .grid--no-gutter .grid__col {
        padding-left: 0;
      }
      .grid--no-gutter .grid__col--span-all {
        margin-left: 0;
        width: 100%;
      }

      .grid__col--ab {
        vertical-align: bottom;
      }

      .grid__col--am {
        vertical-align: middle;
      }

      /*# sourceMappingURL=grid.css.map */
    `;
  }
}
