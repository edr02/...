import React, {useEffect} from 'react';
import * as MuiMaterial from '@mui/material';
import * as EmotionReact from '@emotion/react';
import * as EmotionStyled from '@emotion/styled';
import * as MuiIconsMaterial from '@mui/icons-material';
import 'antd/dist/antd.css';
import 'antd/dist/antd.variable.css';
import * as AntDesignIcons from '@ant-design/icons';
import * as Antd from 'antd';

function App() {
  return (
    <IMac1
      urt67Irt7Irtio8Oro86="urt67irt7irtio8oro86"
      rectangle3="https://anima-uploads.s3.amazonaws.com/projects/630b49494e9713361514db0e/releases/630b49514bf3ee9a2e944e8d/img/rectangle-3@1x.png"
      
    />
  );
}

export default App;

function IMac1(props) {
  const { urt67Irt7Irtio8Oro86, rectangle3 } = props;

  return (
    <div className="i-mac-1" >
      <div className="i-mac-1-1" >
        <div className="overlap-group" >
          <div className="urt67irt7irtio8oro86 inter-normal-black-12px" >
            {urt67Irt7Irtio8Oro86}
          </div>
          <ChipWithAvatar  />
          <Spin  />
        </div>
        <ButtonGroup  />
        <div className="flex-row" >
          <img className="rectangle-3"  src={rectangle3} />
          <Collapse  />
        </div>
      </div>
    </div>
  );
}


function ChipWithAvatar() {
  return (
    <div className="chip-with-avatar" >
      <MuiMaterial.Chip
        clickable
        size="medium"
        color="primary"
        disabled={false}
        variant="outlined"
        label="Chip Label"
        avatar={<MuiMaterial.Avatar variant="circular" src="https://joeschmoe.io/api/v1/random" />}
      />
    </div>
  );
}


function Spin() {
  return (
    <div className="spin" >
      <Antd.Spin delay={0} size="default" />
    </div>
  );
}


function ButtonGroup() {
  return (
    <div className="button-group" >
      <MuiMaterial.ButtonGroup
        size="small"
        color="primary"
        disabled={false}
        variant="outlined"
        disableRipple={false}
        disableElevation={false}
        orientation="horizontal"
      >
        <MuiMaterial.Button endIcon="" startIcon="">
          Button 1
        </MuiMaterial.Button>
        <MuiMaterial.Button endIcon="" startIcon="">
          Button 2
        </MuiMaterial.Button>
        <MuiMaterial.Button endIcon="" startIcon="">
          Button 3
        </MuiMaterial.Button>
      </MuiMaterial.ButtonGroup>
    </div>
  );
}

function Collapse() {
  return (
    <div className="collapse" >
      <Antd.Collapse
        bordered
        accordion
        ghost={false}
        collapsible="header"
        style={{ width: 260 }}
        defaultActiveKey={["1"]}
      >
        <Antd.Collapse.Panel key="1" showArrow header="Panel Title">
          Body content
        </Antd.Collapse.Panel>
        <Antd.Collapse.Panel key="2" showArrow header="Panel Title 2">
          Body content 2
        </Antd.Collapse.Panel>
        <Antd.Collapse.Panel key="3" showArrow header="Panel Title 3">
          Body content 3
        </Antd.Collapse.Panel>
      </Antd.Collapse>
    </div>
  );
}