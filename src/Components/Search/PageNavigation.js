import React from 'react';

export default ( props ) => {
	const {
		      loading,
		      showPrevLink,
		      showNextLink,
		      handlePrevClick,
		      handleNextClick,
	      } = props;
	return (
		<div className="nav-link-container"
			style={{margin: "20px 0",
				display: "flex",
				justifyContent: "flex-end"
			}}
		>
			<a
				href="#"
				className={
					`nav-link 
					${ showPrevLink ? 'show' : 'hide'}
					${ loading ? 'greyed-out' : ''
					}`
				}
				onClick={ handlePrevClick }
				style={{
					color: "#555",
					textDecoration: "none",
					border: "1px solid #898989",
					padding: "10px 20px",
					marginRight: "10px"
				}}
			>
				Prev
			</a>
			<a
				href="#"
				className={
					`nav-link 
					${ showNextLink ? 'show' : 'hide'}
					${ loading ? 'greyed-out' : '' }
					`}
				onClick={ handleNextClick }
				style={{
					color: "#555",
					textDecoration: "none",
					border: "1px solid #898989",
					padding: "10px 20px",
					marginRight: "10px"
				}}
			>
				Next
			</a>
		</div>
	)
}