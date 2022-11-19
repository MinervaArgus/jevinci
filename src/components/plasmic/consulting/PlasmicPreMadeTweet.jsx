// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9Wy1b3THTSs75bMR8UrtAP
// Component: bmjdF6X2YIqzl
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
import sty from "./PlasmicPreMadeTweet.module.css"; // plasmic-import: bmjdF6X2YIqzl/css

export const PlasmicPreMadeTweet__VariantProps = new Array();

export const PlasmicPreMadeTweet__ArgProps = new Array();

function PlasmicPreMadeTweet__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const currentUser = p.useCurrentUser?.() || {};
  return (
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
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__gCfck
        )}
      >
        {"Mark Dalgleish"}
      </div>

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__vChxL
        )}
      >
        {
          "Other industries figured out a long time ago that you can't go straight from concept design to construction. If we want to do design systems right, we're missing a step."
        }
      </div>

      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"70px"}
        displayMaxHeight={"none"}
        displayMaxWidth={"none"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"70px"}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPreMadeTweet__ArgProps,
          internalVariantPropNames: PlasmicPreMadeTweet__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPreMadeTweet__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPreMadeTweet";
  } else {
    func.displayName = `PlasmicPreMadeTweet.${nodeName}`;
  }
  return func;
}

export const PlasmicPreMadeTweet = Object.assign(
  // Top-level PlasmicPreMadeTweet renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicPreMadeTweet
    internalVariantProps: PlasmicPreMadeTweet__VariantProps,
    internalArgProps: PlasmicPreMadeTweet__ArgProps
  }
);

export default PlasmicPreMadeTweet;
/* prettier-ignore-end */
