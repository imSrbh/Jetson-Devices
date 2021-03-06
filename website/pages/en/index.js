/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
        render() {
                const { siteConfig, language = '' } = this.props;
                const { baseUrl, docsUrl } = siteConfig;
                const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    // const PromoSection = props => (
    //   <div className="section promoSection">
    //     <div className="promoRow">
    //       <div className="pluginRowBlock">{props.children}</div>
    //     </div>
    //   </div>
    // );

    // const Button = props => (
    //   <div className="pluginWrapper buttonWrapper">
    //     <a className="button" href={props.href} target={props.target}>
    //       {props.children}
    //     </a>
    //   </div>
    // );

    return (
      <SplashContainer>
        {/* <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} /> */}
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />   
          {/* <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button>
          </PromoSection> */}
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );



    // const TryOut = () => (
    //   <Block id="try">
    //     {[
    //       // {
    //       //   content:
    //       //     'To make your landing page more attractive, use illustrations! Check out ' +
    //       //     '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
    //       //     'The illustrations you see on this page are from unDraw.',
    //       //   image: `${baseUrl}img/undraw_code_review.svg`,
    //       //   imageAlign: 'left',
    //       //   title: 'Wonderful SVG Illustrations',
    //       // },
    //     ]}
    //   </Block>
    // );

    // const Description = () => (
    //   <Block background="dark">
    //     {/* {[
    //       {
    //         content:
    //           'This is another description of how this project is useful',
    //         image: `${baseUrl}img/undraw_note_list.svg`,
    //         imageAlign: 'right',
    //         title: 'Description',
    //       },
    //     ]} */}
    //   </Block>
    // );

    // const LearnHow = () => (
    //   <Block background="light">
    //     {[
    //       // {
    //       //   content:
    //       //     'Each new Docusaurus project has **randomly-generated** theme colors.',
    //       //   image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
    //       //   imageAlign: 'right',
    //       //   title: 'Randomly Generated Theme Colors',
    //       // },
    //     ]}
    //   </Block>
    // );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'carrier-board + compute module featuring Tegra X1 SOC (quad-core 64-bit Cortex-A57 + 128-core Maxwell GPU), 4GB 64-bit LPDDR4, 4K video encoder/decoder.',
            image: 'https://www.nvidia.com/content/dam/en-zz/Solutions/intelligent-machines/embedded-systems/nvidia-jetson-nano-module-standing-2c50-d.jpg',
            imageAlign: 'top',
            title: 'Jetson NANO',

          },
          {
            content: 'carrier-board + compute module featuring Tegra X1 SOC (quad-core 64-bit Cortex-A57 + 256-core Maxwell GPU), 4GB 64-bit LPDDR4, and 16GB eMMC.',
            image: `${baseUrl}img/JetsonTX1.png`,
            imageAlign: 'top',
            title: 'Jetson TX1',
          },
          {
            content: 'carrier-board + compute module featuring Tegra X2 SOC (quad-core 64-bit Cortex-A57 + dual-core NVIDIA Denver2 CPU + 256-core Pascal GPU), 8GB 128-bit LPPDR4, 32GB eMMC.',
            image: `${baseUrl}img/TX2.png`,
            imageAlign: 'top',
            title: 'Jetson TX2',
          },
          {
            content: 'carrier-board + compute module featuring Xavier SOC (octal-core 64-bit ARMv8.2 + 512-core Volta GPU with Tensor Cores + dual DLAs), 16GB 256-bit LPDDR4x, 32GB eMMC.',
            image: `${baseUrl}img/Xav.jpg`,
            imageAlign: 'top',
            title: 'Jetson AGX Xavier',
          }
        ]}
      </Block>
    );
    
    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>NVIDIA Jeston</h2>
        <MarkdownBlock>NVIDIA® Jetson™ systems provide the performance and power efficiency to run autonomous machines software, faster and with less power. Each is a complete System-on-Module (SOM), with CPU, GPU, PMIC, DRAM, and flash storage—saving development time and money. Jetson is also extensible. Just select the SOM that’s right for the application, and build the custom system around it to meet its specific needs.</MarkdownBlock>
      </div>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

          return null;
      //(
      //   <div className="productShowcaseSection paddingBottom">
      //     {/* <h2>Who is Using This?</h2>
      //     <p>This project is used by all these people</p>
      //     <div className="logos">{showcase}</div>
      //     <div className="more-users">
      //       <a className="button" href={pageUrl('users.html')}>
      //         More {siteConfig.title} Users
      //       </a>
      //     </div> */}
      //   </div>
      // );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          {/* <LearnHow />
          <TryOut />
          <Description />*/}
          <Showcase /> 
        </div>
      </div>
    );
  }
}

module.exports = Index;