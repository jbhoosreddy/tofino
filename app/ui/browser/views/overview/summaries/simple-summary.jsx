/*
Copyright 2016 Mozilla

Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
*/

import React, { PropTypes } from 'react';

import Style from '../../../../shared/style';

const GRADIENT_MASK = `-webkit-gradient(linear, center top, center bottom,
                       color-stop(0.8, rgba(255,255,255,1)),
                       color-stop(1, rgba(255,255,255,0)))`;

const CONTAINER_STYLE = Style.registerStyle({
  flex: 1,
  flexDirection: 'column',
  overflow: 'hidden',
});

const TITLE_STYLE = Style.registerStyle({
  display: 'block',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  paddingBottom: '1px',
  color: 'var(--theme-overview-summary-title-color)',
  '-webkit-mask-image': GRADIENT_MASK,
});

const URL_STYLE = Style.registerStyle({
  display: 'block',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontSize: '90%',
  color: 'var(--theme-overview-summary-subtitle-color)',
});

const SimpleSummary = function(props) {
  return (
    <div className={CONTAINER_STYLE}>
      <div className={TITLE_STYLE}>
        {props.title}
      </div>
      <div className={URL_STYLE}>
        {props.url}
      </div>
    </div>
  );
};

SimpleSummary.displayName = 'SimpleSummary';

SimpleSummary.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SimpleSummary;
