// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9Wy1b3THTSs75bMR8UrtAP
// Component: MCpe3J9ydVrM-k
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ActionButton from "../../ActionButton"; // plasmic-import: Y2XYRxe_1CCZLl/component
import BlockButton from "../../BlockButton"; // plasmic-import: n7RZHq9YTMzqib/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_consulting.module.css"; // plasmic-import: 9Wy1b3THTSs75bMR8UrtAP/projectcss
import sty from "./PlasmicCompletedFollowableProfile.module.css"; // plasmic-import: MCpe3J9ydVrM-k/css
import image11KSgMxw2EGaRukz from "./images/image11.png"; // plasmic-import: kSgMXW2eGaRUKZ/picture

export const PlasmicCompletedFollowableProfile__VariantProps = new Array(
  "following"
);

export const PlasmicCompletedFollowableProfile__ArgProps = new Array();

function PlasmicCompletedFollowableProfile__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const currentUser = p.useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "following",
        type: "private",
        initFunc: ($props, $state) => $props["following"]
      }
    ],

    [$props]
  );

  const $state = p.useDollarState(stateSpecs, $props);
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root,
        { [sty.rootfollowing]: hasVariant($state, "following", "following") }
      )}
    >
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img, {
          [sty.imgfollowing]: hasVariant($state, "following", "following")
        })}
        displayHeight={"50px"}
        displayMaxHeight={"none"}
        displayMaxWidth={"none"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"50px"}
        src={{
          src: image11KSgMxw2EGaRukz,
          fullWidth: 150,
          fullHeight: 184,
          aspectRatio: undefined
        }}
      />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__ckcDf, {
          [sty.freeBoxfollowing__ckcDfhsqS1]: hasVariant(
            $state,
            "following",
            "following"
          )
        })}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__dJUeB, {
            [sty.freeBoxfollowing__dJUeBhsqS1]: hasVariant(
              $state,
              "following",
              "following"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__pJrF9,
              {
                [sty.textfollowing__pJrF9HsqS1]: hasVariant(
                  $state,
                  "following",
                  "following"
                )
              }
            )}
          >
            {"Totoro"}
          </div>
        </p.Stack>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__lbn6N,
            {
              [sty.textfollowing__lbn6NhsqS1]: hasVariant(
                $state,
                "following",
                "following"
              )
            }
          )}
        >
          {"@friendlyneighbor"}
        </div>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___6FOPd)}
      >
        <ActionButton
          data-plasmic-name={"actionButton"}
          data-plasmic-override={overrides.actionButton}
          className={classNames("__wab_instance", sty.actionButton, {
            [sty.actionButtonfollowing]: hasVariant(
              $state,
              "following",
              "following"
            )
          })}
          variants={
            hasVariant($state, "following", "following") ? "primary" : undefined
          }
        >
          {hasVariant($state, "following", "following") ? "Unfollow" : "Follow"}
        </ActionButton>

        {(hasVariant($state, "following", "following") ? false : true) ? (
          <BlockButton
            data-plasmic-name={"blockButton"}
            data-plasmic-override={overrides.blockButton}
            className={classNames("__wab_instance", sty.blockButton, {
              [sty.blockButtonfollowing]: hasVariant(
                $state,
                "following",
                "following"
              )
            })}
          />
        ) : null}
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "img", "actionButton", "blockButton"],
  img: ["img"],
  actionButton: ["actionButton"],
  blockButton: ["blockButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicCompletedFollowableProfile__ArgProps,
          internalVariantPropNames:
            PlasmicCompletedFollowableProfile__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCompletedFollowableProfile__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCompletedFollowableProfile";
  } else {
    func.displayName = `PlasmicCompletedFollowableProfile.${nodeName}`;
  }
  return func;
}

export const PlasmicCompletedFollowableProfile = Object.assign(
  // Top-level PlasmicCompletedFollowableProfile renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    actionButton: makeNodeComponent("actionButton"),
    blockButton: makeNodeComponent("blockButton"),
    // Metadata about props expected for PlasmicCompletedFollowableProfile
    internalVariantProps: PlasmicCompletedFollowableProfile__VariantProps,
    internalArgProps: PlasmicCompletedFollowableProfile__ArgProps
  }
);

export default PlasmicCompletedFollowableProfile;
/* prettier-ignore-end */
