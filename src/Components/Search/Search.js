import React from 'react';
import ReactDOM from 'react-dom';
// import './Search.css';
import axios from 'axios';
// import Loader from './loader3.gif';
import PageNavigation from './PageNavigation';

class Search extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			query: '',
			results: {},
			loading: false,
			message: '',
			totalResults: 0,
			totalPages: 0,
			currentPageNo: 0,
		};

		this.cancel = '';
	}


	/**
	 * Get the Total Pages count.
	 *
	 * @param total
	 * @param denominator Count of results per page
	 * @return {number}
	 */
	getPageCount = ( total, denominator ) => {
		const divisible	= 0 === total % denominator;
		const valueToBeAdded = divisible ? 0 : 1;
		return Math.floor( total/denominator ) + valueToBeAdded;
	};

	/**
	 * Fetch the search results and update the state with the result.
	 * Also cancels the previous query before making the new one.
	 *
	 * @param {int} updatedPageNo Updated Page No.
	 * @param {String} query Search Query.
	 *
	 */
	fetchSearchResults = ( updatedPageNo = '', query ) => {
		const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
		const searchUrl = `https://pixabay.com/api/?key=12413278-79b713c7e196c7a3defb5330e&q=${query}${pageNumber}`;

		if( this.cancel ) {
			this.cancel.cancel();
		}

		this.cancel = axios.CancelToken.source();

		axios.get( searchUrl, {
			cancelToken: this.cancel.token
		} )
			.then( res => {
				const total = res.data.total;
				const totalPagesCount = this.getPageCount( total, 20 );
				const resultNotFoundMsg = ! res.data.hits.length
										? 'There are no more search results. Please try a new search'
										: '';
				this.setState( {
					results: res.data.hits,
					message: resultNotFoundMsg,
					totalResults: total,
					totalPages: totalPagesCount,
					currentPageNo: updatedPageNo,
					loading: false
				} )
			} )
			.catch( error => {
				if ( axios.isCancel(error) || error ) {
					this.setState({
						loading: false,
						message: 'Failed to fetch the data. Please check network'
					})
				}
			} )
	};

	handleOnInputChange = ( event ) => {
		const query = event.target.value;
		if ( ! query ) {
			this.setState( { query, results: {}, message: '', totalPages: 0, totalResults: 0 } );
		} else {
			this.setState( { query, loading: true, message: '' }, () => {
				this.fetchSearchResults( 1, query );
			} );
		}
	};

	/**
	 * Fetch results according to the prev or next page requests.
	 *
	 * @param {String} type 'prev' or 'next'
	 */
	handlePageClick = ( type ) => {
		// event.preventDefault();
		const updatePageNo = 'prev' === type
			? this.state.currentPageNo - 1
			: this.state.currentPageNo + 1;

		if( ! this.state.loading  ) {
			this.setState( { loading: true, message: '' }, () => {
				this.fetchSearchResults( updatePageNo, this.state.query );
			} );
		}
	};

	renderSearchResults = () => {
		const { results } = this.state;

		if ( Object.keys( results ).length && results.length ) {
			return (
				<div className="results-container"
					style={{
						display: "flex",
						flexFlow: "wrap"
					}}
				>
					{ results.map( result => {
						return (
							<a key={ result.id } href={ result.previewURL } className="result-item"
								style={{position: "relative",
									padding: "16px",
									border: "1px solid #898989",
									margin: "16px",
									textAlign: "center",
									minWidth: "200px",
									boxShadow: "2px 2px 2px #898989"
								}}
							>
								<h6 className="image-username"
										style={{color: "#ff7f50",
											fontSize: "18px",
											position: "absolute",
											bottom: "0",
											right: "0",
											margin:"0",
											backgroundColor: "rgba( 0 ,0 ,0 , 0.8 )",
											padding: "5px 10px"
										}}
								>
									{result.user}
								</h6>
								<div className="search-image-wrapper"
										style={{display: "flex",
											justifyContent: "center",
											alignSelf: "center",
											boxSizing: "border-box",
											height: "100%"
										}}
								>
									<img className="image" src={ result.previewURL } alt={`${result.username} image`} style={{width: "100%", height: "200px"}}/>
	
								</div>
							</a>
						)
					} ) }

				</div>
			)
		}
	};

	render() {
		const { query, loading, message, currentPageNo, totalPages } = this.state;

		const showPrevLink = 1 < currentPageNo;
		const showNextLink = totalPages > currentPageNo;

		return (
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    {/* <h1>
     Search
      <small>Search beautiful images</small>
    </h1> */}
		<div className="Scontainer"
			 style={{margin: "36px auto",
					width: "100%",
					maxWidth: "800px"}} 
		>
			{/*	Heading*/}
			<h2 className="search-heading"
				styel={{
					size: "30px",
					padding: "16px 0",
					color: "#444",
					textAlign: "center"
				}}
			>
				Live Search: React Application
			</h2>
			{/* Search Input*/}
			<label className="search-label" htmlFor="search-input" style={{position: "relative"}}>
				<input
					type="text"
					name="query"
					value={ query }
					id="search-input"
					placeholder="Search..."
					onChange={this.handleOnInputChange}
					style={{width: "100%",
							padding: "2px",
							fontSize: "22px",
							color: "#444",
							boxSizing: "border-box",
							outline: "none"
						}}
				/>
				<i className="fa fa-search search-icon" aria-hidden="true"
					style={{
						position: "absolute",
						top: "10px",
						fontSize: "22px",
						color: "#555",
						right: "18px"
					}}
				/>
			</label>

			{/*	Error Message*/}
				{message && <p className="message">{ message }</p>}

			{/*	Loader*/}
			{/* <img src={ Loader } 
				className={`search-loading ${ loading ? 'show' : 'hide' }`} 
				alt="loader"
				style={{
					position: "absolute",
					left: "0",
					right: "0",
					margin: "auto"
				}}
			
			/> */}

			{/*Navigation*/}
			<PageNavigation
				loading={loading}
				showPrevLink={showPrevLink}
				showNextLink={showNextLink}
				handlePrevClick={ () => this.handlePageClick('prev' )}
				handleNextClick={ () => this.handlePageClick('next' )}
			/>

			{/*	Result*/}
			{ this.renderSearchResults() }

			{/*Navigation*/}
			<PageNavigation
				loading={loading}
				showPrevLink={showPrevLink}
				showNextLink={showNextLink}
				handlePrevClick={ () => this.handlePageClick('prev' )}
				handleNextClick={ () => this.handlePageClick('next' )}
			/>

		</div>
	</section>
</div>
		)
	}
}

export default Search