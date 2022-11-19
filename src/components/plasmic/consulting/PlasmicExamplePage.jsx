// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9Wy1b3THTSs75bMR8UrtAP
// Component: Hzn-pxQjKn6WK
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_consulting.module.css"; // plasmic-import: 9Wy1b3THTSs75bMR8UrtAP/projectcss
import sty from "./PlasmicExamplePage.module.css"; // plasmic-import: Hzn-pxQjKn6WK/css
import image48VG9C896GNeQRea from "./images/image48.png"; // plasmic-import: vG9c896GNeQRea/picture

export const PlasmicExamplePage__VariantProps = new Array();

export const PlasmicExamplePage__ArgProps = new Array();

function PlasmicExamplePage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const currentUser = p.useCurrentUser?.() || {};
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            hasGap={true}
            className={classNames(projectcss.all, sty.columns)}
          >
            <div className={classNames(projectcss.all, sty.column__sHoiL)}>
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"100%"}
                src={{
                  src: image48VG9C896GNeQRea,
                  fullWidth: 697,
                  fullHeight: 1064,
                  aspectRatio: undefined
                }}
              />
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.column___2KVo)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__bEIbA
                )}
              >
                {"Ceramic Shield."}
              </div>

              <div
                className={classNames(projectcss.all, sty.freeBox___19Oiu)}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__sQsDa
                )}
              >
                {"Even better spill and splash resistance."}
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__jIw7N)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__k3Qfg
                  )}
                >
                  {"Place order now"}
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__v7Uj
                  )}
                >
                  {"See how it works"}
                </div>
              </p.Stack>
            </p.Stack>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "columns", "img"],
  columns: ["columns", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicExamplePage__ArgProps,
          internalVariantPropNames: PlasmicExamplePage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicExamplePage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicExamplePage";
  } else {
    func.displayName = `PlasmicExamplePage.${nodeName}`;
  }
  return func;
}

export const PlasmicExamplePage = Object.assign(
  // Top-level PlasmicExamplePage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicExamplePage
    internalVariantProps: PlasmicExamplePage__VariantProps,
    internalArgProps: PlasmicExamplePage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicExamplePage;
/* prettier-ignore-end */