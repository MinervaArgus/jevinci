// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9Wy1b3THTSs75bMR8UrtAP
// Component: ijYVlv1ka3boUs
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
import sty from "./PlasmicWorkspace.module.css"; // plasmic-import: ijYVlv1ka3boUs/css

export const PlasmicWorkspace__VariantProps = new Array();

export const PlasmicWorkspace__ArgProps = new Array("children");

function PlasmicWorkspace__RenderFunc(props) {
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
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"Objective:"}
      </div>

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <div className={classNames(projectcss.all, sty.freeBox__hSGx)} />
          ),

          value: args.children
        })}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "text", "freeBox"],
  text: ["text"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicWorkspace__ArgProps,
          internalVariantPropNames: PlasmicWorkspace__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicWorkspace__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWorkspace";
  } else {
    func.displayName = `PlasmicWorkspace.${nodeName}`;
  }
  return func;
}

export const PlasmicWorkspace = Object.assign(
  // Top-level PlasmicWorkspace renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicWorkspace
    internalVariantProps: PlasmicWorkspace__VariantProps,
    internalArgProps: PlasmicWorkspace__ArgProps
  }
);

export default PlasmicWorkspace;
/* prettier-ignore-end */
